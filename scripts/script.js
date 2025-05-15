var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { setupThemeToggle } from './theme';
// Função para carregar um componente HTML externamente
function loadComponent(id, file) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(file);
        const html = yield res.text();
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = html;
        }
    });
}
// Inicialização do site
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield loadComponent('header-container', 'components/header.html');
        setupThemeToggle();
    });
}
init();
