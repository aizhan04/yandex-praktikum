import Handlebars from "handlebars"
import user_avatar from '../../assets/user.svg'

export {default as ChatList} from './chatList.hbs?raw';

Handlebars.registerHelper('chats', () => {
    return [
        {
            id: 1,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            unread_count: 2,
            time: "12:00",
            sendMessage: true
        },
        {
            id: 2,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            time: "12:00",
            sendMessage: false,
        },
        {
            id: 3,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            unread_count: 2,
            time: "12:00",
            sendMessage: true
        },
        {
            id: 4,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            time: "12:00",
            isActiveChat: true,
            sendMessage: false,
        },
        {
            id: 5,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            unread_count: 2,
            time: "12:00",
            sendMessage: true
        },
        {
            id: 6,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            time: "12:00",
            sendMessage: false,
        },
        {
            id: 7,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            unread_count: 2,
            time: "12:00",
            sendMessage: true
        },
        {
            id: 8,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            time: "12:00",
            sendMessage: false,
        },
        {
            id: 9,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            time: "12:00",
            sendMessage: false,
        },
        {
            id: 10,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            time: "12:00",
            sendMessage: false,
        },
        {
            id: 11,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            time: "12:00",
            sendMessage: false,
        },
        {
            id: 12,
            name: "Андрей",
            message: "Друзья, у меня для вас особенный выпуск новостей!!!",
            user_avatar: user_avatar,
            time: "12:00",
            sendMessage: false,
        },
    ]
})
