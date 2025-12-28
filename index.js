import './server/instrumentation.server.js';
const { path, host, port, server } = await import('./start.js');
export { path, host, port, server };