import app from "./app";

const server = app.listen(8000, () => console.log('Server started in localhost:8000'))

export default server;