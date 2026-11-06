// Motor 3D compartido de las demos: carga piezas pregeneradas (.bin) y dibuja según el estado del scroll.
import * as T from './three-lite.js';
const base = new URL('.', import.meta.url);
async function part(p) {
  const bin = await (await fetch(new URL(p.bin, base))).arrayBuffer();
  const h = new Float32Array(bin, 0, 4), m = h[0], nv = h[1], ni = h[2];
  const q = new Int16Array(bin, 16, nv * 3), pos = new Float32Array(nv * 3);
  for (let i = 0; i < pos.length; i++) pos[i] = q[i] / 32767 * m;
  const g = new T.BufferGeometry(); g.setAttribute('position', new T.BufferAttribute(pos, 3));
  g.setIndex(new T.BufferAttribute(new Uint16Array(bin, 16 + nv * 6, ni), 1)); g.computeVertexNormals();
  const mat = new T.MeshPhysicalMaterial({ color: new T.Color(p.color), metalness: p.metal || 0, roughness: p.rough ?? .3,
    clearcoat: p.clear ?? 0, clearcoatRoughness: .15, sheen: p.sheen || 0, sheenColor: new T.Color(p.sheenColor || '#ffffff') });
  return new T.Mesh(g, mat);
}
export async function mount(canvas, cfg) {
  const meshes = await Promise.all(cfg.parts.map(part));
  const renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: !!cfg.keep });
  renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 760 ? 1.5 : 2));
  renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = cfg.exposure || 1.05;
  const scene = new T.Scene(), pmrem = new T.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new T.RoomEnvironment(), .04).texture; scene.environmentIntensity = cfg.env ?? .55; pmrem.dispose();
  const camera = new T.PerspectiveCamera(28, 1, .1, 50); camera.position.set(0, .15, 6.2);
  for (const [c, i, x, y, z] of [[0xfff8ee, 2.6, 3.5, 5, 4], [cfg.rim || 0x7fd1d9, 2.2, -4, 2, -3], [0xffffff, .35, -3, -1, 4]]) {
    const l = new T.DirectionalLight(c, i); l.position.set(x, y, z); scene.add(l); }
  const inner = new T.Group(); meshes.forEach(m => inner.add(m)); inner.scale.setScalar(cfg.scale || 1.2);
  const b = cfg.base || [0, 0, 0]; inner.rotation.set(b[0], b[1], b[2]);
  const obj = new T.Group(); obj.add(inner); scene.add(obj);
  const api = {
    draw(st) { obj.position.set(st.x, st.y, 0); obj.rotation.set(st.rx, st.ry, 0); obj.scale.setScalar(st.s); renderer.render(scene, camera); },
    size() { const r = canvas.getBoundingClientRect(); renderer.setSize(r.width, r.height, false); camera.aspect = r.width / r.height; camera.updateProjectionMatrix(); },
  };
  api.size(); renderer.compile(scene, camera);
  return api;
}
