interface User {
    id: number;
    username: string;
    age: number;
    firstName: string;
    lastName: string;
    email: string;
}

export default class UserController {

    private idCounter = 3;
    private users: User[] = [
        {
            id: 1,
            username: 'feri',
            age: 26,
            firstName: 'Ferenc',
            lastName: 'Kovács',
            email: 'feri@example.com'
        },
        {
            id: 2,
            username: 'laci',
            age: 19,
            firstName: 'László',
            lastName: 'V.',
            email: 'v.laszlo@example.com'
        }
    ];

    getAllUsers = (req, res) => {
        res.json(this.users);
    }

    getUser = (req, res) => {
        const id = req.params.id;

        for (const user of this.users) {
            if (user.id == id) {
                res.json(user);
                return;
            }
        }

        res.status(404).json({ error: 'User not found.' });
    }

    createUser = (req, res) => {
        const user = req.body as User;
        user.id = this.idCounter++;
        this.users.push(user);
        res.json(user);
    }

    updateUser = (req, res) => {
        const user = req.body as User;

        for (const i in this.users) {
            if (this.users[i].id == user.id) {
                this.users[i] = user;
                res.json(user);
                return;
            }
        }

        res.status(404).json({ error: 'User not found.' });
    }

    deleteUser = (req, res) => {
        const id = req.params.id;

        for (const i in this.users) {
            if (this.users[i].id == id) {
                this.users.splice(parseInt(i), 1);
                res.json({ success: true });
                return;
            }
        }

        res.status(404).json({ error: 'User not found.' });
    }
}