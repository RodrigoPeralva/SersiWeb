function criarCollapse(siglaId, sigla, idBtn, titulo, texto) {

    let collapseServi = `<div class="card">
                            <div class="card-header btn btn-link collapsed" data-toggle="collapse" data-target="__SIGLAID__"
                                aria-expanded="false" role="button" id="__ID_BTN__">
                                <h6 class="collapse-titulo">
                                    __TITULO__
                                </h6>
                            </div>
                            <div id="__SIGLA__" class="collapse" data-parent="#accordion-serv">
                                <div class="card-body">
                                __TEXTO__
                                </div>
                            </div>
                        </div>`

    collapseServi = collapseServi.replace("__SIGLAID__", siglaId)
    collapseServi = collapseServi.replace("__SIGLA__", sigla)
    collapseServi = collapseServi.replace("__TITULO__", titulo)
    collapseServi = collapseServi.replace("__TEXTO__", texto)
    collapseServi = collapseServi.replace("__ID_BTN__", idBtn)

    return $(collapseServi)

}

const listaServ = {

    "PPP": "Perfil Profissiografico Previdenciario",
    "PPRA": "Programa de prevenção de riscos ambientais",
    "PCA": "Programa de Concervação Auditiva",
    "PPR": "Programa de Preservação Respiratoria",
    "PGR": "Programa de Gerenciamento de Riscos",
    "PCMAT": "Programa de Condições e meio Ambiente de Trabalho na Indústria de Construção",
    "LTCAT": "Laudo Tecnico de Condições do Ambiente de Trabalho",
    "CIPA": "Comissao Interna de Prevenção de Acidente",
    "AET": "Analise Ergonomica do Trabalho",
    "LTI": "Laudo Tecnico de Insalubridade",
    "APR": "Analise Preliminar de Riscos",
    "AR": "Analise de Riscos",
    "LTP": "Laudo Tecnico de Periculosidade",
    "LTE": "Laudo Tecnico de Ergonomia",
    "SIPAT": "Semana Interna de Prevenção de Acidente do Trabalho",
    "MAPA": "Mapa de Risco",
    "SS": "Sinalização de Segurança",
    "AU": "Auditoria para certificação",
    "IM": "Inventário de máquinas e equipamentos "

}

Object.entries(listaServ).forEach((elemento, indice) => {

    let nome = elemento[0]
    let keysTextoServ = Object.keys(textoServ)[indice]

    if (nome === keysTextoServ) {

        let siglaId = "#" + elemento[0]
        let titulo = elemento[1]
        let texto = Object.values(textoServ)[indice]
        let idBtn = elemento[0] + "Btn"

        meuCollapse = criarCollapse(siglaId, elemento[0], idBtn, titulo, texto)

        $(".accordion").append(meuCollapse)
        console.log(titulo)
        console.log("Funcionou")
    }

});