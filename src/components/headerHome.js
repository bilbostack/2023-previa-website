import React from "react"

const HeaderHome = ({ data }) => {
  function claimWithHtml() {
    return { __html: data.conference_claim }
  }

  return (
    <header id="front-header">
      <div className="cover"></div>
      <div className="content">
        <div class="container text-center">
          <div class="logo">
            <span>previa</span>&nbsp;
            <img id="logo" src={data.logo} alt={data.conference_name} />
          </div>
          <h1 class="display-4" dangerouslySetInnerHTML={claimWithHtml()}></h1>
          <p class="lead">{data.conference_date}</p>

          <p>{data.header_banner.cta_pre_text}{data.header_banner.cta_visible}</p>
          <div class={data.header_banner.cta_visible === true ? "" : "hidden"}>
            <a
              class="btn btn-primary btn-lg"
              href={data.header_banner.cta_url}
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.header_banner.cta_text}
            </a>
          </div>
          <br /><br />
          <div id="dossier">
            <h5>
              <span>
                👉 Echa un ojo a nuestras&nbsp;
                <a href="/sponsors/bilbostack-sponsors-2023_es.pdf" 
                  target="_blank" 
                  role="button" 
                  rel="noopener noreferrer">
                    opciones de patrocinio
                </a> 👈
              </span>
            </h5>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderHome;
