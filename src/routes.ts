import routes from "@shared/http/routes";
import { Router } from "AppDataSource";
import { CreateFornecedorController } from "./controllers/CreateFornecedorController";
import { DeleteFornecedoresControler } from "./controllers/DeleteFornecedoresController";
import { GetAllFornecedoresController } from "./controllers/GetAllFornecedoresController";

cont routes = Router();


routes.post("/Fornecedores", new CreateFornecedorController().handle);
routes.get("/Fornecedores", new GetAllFornecedoresController().handle);
routes.delete("/Fornecedores/:id", new DeleteFornecedoresControler().handle);

export { routes };
