import React from "react";
import "./ContatoCard.css";

function ContatoCard() {
  return (
    <div className="ContatoContainerCard">
      <div className="ContatoContainerCardInner">
        <div className="ContatoContainerCardInnerLeft">
          <div className="ContatoContainerCardInnerUpperBox"></div>
          <div className="ContatoContainerCardInnerText">
            <h1>Social Media</h1>
            <h6>
              Siga-nos nas mais diversas redes sociais e acomopanhe nosso
              conteúdo direto do forno.
            </h6>
            <div className="ContatoContainerCardInnerButton">
              Ir para redes sociais
            </div>
          </div>
        </div>

        <div className="ContatoContainerCardInnerMid">
          <div className="ContatoContainerCardInnerUpperBox"></div>
          <div className="ContatoContainerCardInnerText">
            <h1>Prensa</h1>
            <h6>
              Entre em contato através de nósso e-mail para ter acesso a
              informações administrativas e sanitarias.
            </h6>
            <div className="ContatoContainerCardInnerButton">Enviar e-mail</div>
          </div>
        </div>

        <div className="ContatoContainerCardInnerRight">
          <div className="ContatoContainerCardInnerUpperBox"></div>
          <div className="ContatoContainerCardInnerText">
            <h1>Eventos</h1>
            <h6>
              Informações referentes a realização de eventos em nosso espaço
              gourmet, cozinha e salão.
            </h6>
            <div className="ContatoContainerCardInnerButton">Ir contato</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContatoCard;
