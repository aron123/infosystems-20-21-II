import { Repository } from "typeorm";


export abstract class Controller {
    repository: Repository<any>;

    create = async (req, res) => {
        const entity = this.repository.create(req.body);

        try {
            const entityAdded = await this.repository.save(entity);
            res.json(entityAdded);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }

    getAll = async (req, res) => {
        try {
            const entities = await this.repository.find();
            res.json(entities);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }

    getOne = async (req, res) => {
        try {
            const id = req.params.id;
            const entity = await this.repository.findOne(id);

            if (!entity) {
                this.handleError(res, 404, 'No entity found');
                return;
            }

            res.json(entity);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }

    update = this.create;

    delete = async (req, res) => {
        try {
            const id = req.params.id;
            const entity = await this.repository.findOne(id);

            if (!entity) {
                this.handleError(res, 404, 'No entity found');
                return;
            }

            await this.repository.delete(entity);
            res.json({ success: true });
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }

    handleError = (res, status = 500, message = 'Server error') => {
        res.status(status).json({ message });
    }
}