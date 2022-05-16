import {
  deleteMessage,
  deleteUser,
  getMessage,
  IDeleteMessage,
} from "./user.service";

export const socketService = (socket: any) => {
  /* Socket for emit Notifications */
  socket.on("messages", async function (data: { id: string }) {
    const res = await getMessage(data.id);
    socket.emit("return", res);
  });

  /*Delete Message for Each user */
  socket.on("delete", async (data: IDeleteMessage) => {
    await deleteMessage(data);
  });

  /* Socket for delete user record */
  socket.on("close", async (data: any) => {
    await deleteUser(data);
  });
};
