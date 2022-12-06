import { Router } from "express";
import { CreateAquisicaoController } from "src/controllers/CreateAquisicaoController";
import { DeleteAquisicaoController } from "src/controllers/DeleteAquisiçaoController";
import { GetAllAquisicaoController } from "src/controllers/GetAllAquisicaoController";
import { UpdateAquisicaoController } from "src/controllers/UpdateAquisicaoController";

const routes = Router();

routes.post("/aquisicao", new CreateAquisicaoController().handle);
routes.get("/aquisicao", new GetAllAquisicaoController().handle);
routes.delete("/aquisicao", new DeleteAquisicaoController().handle);
routes.put("/aquisicao", new UpdateAquisicaoController().handle);

export { routes };