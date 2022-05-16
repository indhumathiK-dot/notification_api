import Users from "../models/user.model";

export interface IDeleteMessage {
  id: string;
  message: string;
}

export const addUser = async (id: string) => {
  try {
    const user = await Users.findOne({ id: id });

    if (!user) {
      const newUser = new Users();
      newUser.id = id;
      await newUser.save();
      return id;
    }
  } catch (error) {
    throw error;
  }
};

export const getMessage = async (id: string) => {
  try {
    const user = await Users.findOne({ id: id });
    if (user) {
      const response =
        user.notification[Math.floor(Math.random() * user.notification.length)];
      return response;
    }
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    await Users.deleteOne({ id: id });
  } catch (error) {
    throw error;
  }
};

export const deleteMessage = async (data: IDeleteMessage) => {
  try {
    const user = await Users.findOne({ id: data.id });
    if (user) {
      user.notification = user.notification?.filter(
        (userRecord: any) => userRecord.message !== data.message
      );
      await user.save();
    }
  } catch (error) {
    throw error;
  }
};
