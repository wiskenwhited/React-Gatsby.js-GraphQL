import React from "react"
import images from "../../constants/image.js"

import "./styles.css"

const Body = () => (
  <div>
    <div className="cloud">
      <span className="cloud-title"> CLOUD </span>
    </div>
    <div className="clound-content">
      Byte Network cloud behaves similar to the word class clouds by doing all the “blockchain magic”  behind the scenes and provides developers a complete tool kit for a smooth <br />adoption and access to a complete spectrum of services - Database (Big Data), Storage, <br />Microservices, CDN
    </div>
    <div className="data">
      <div className="data-history">
        <img src={images.lock} alt="" className="data-image-lock" />
        <div className="data-history-content">
          <span className="data-history-content-title">Data History + <br />Imutability </span>
          <span className="data-history-content-text">
            - Data proof for audits <br />
            - Lifecycle history browsing <br />
            - Tamper-resistant data <br />
            - Fully recoverable <br />
          </span>
        </div>
      </div>
      <div className="data-transparency">
        <img src={images.man} alt="" className="data-image-lock" />
        <div className="data-history-content">
          <span className="data-history-content-title">Transparency + <br />Accountability </span>
          <span className="data-history-content-text">
            - Personell accountability <br />
            - Data changing backtracking <br />
            - Regulatory compliance <br />
          </span>
        </div>
      </div>
    </div>
    <div className="data">
      <div className="data-history">
        <img src={images.setting} alt="" className="data-image-lock" />
        <div className="data-history-content">
          <span className="data-history-content-title">Security + <br />Availability </span>
          <span className="data-history-content-text">
          - Nodes across multiple regions <br />
          - DDOS attack protection <br />
          - Data redundancy <br />
          </span>
        </div>
      </div>
      <div className="data-transparency">
        <img src={images.pen} alt="" className="data-image-lock" />
        <div className="data-history-content">
          <span className="data-history-content-title"> Compliance </span>
          <span className="data-history-content-text">
          - ISO standards inherited <br />
          - GDPR data protection <br />
          - Cloud ISO standards <br />
          </span>
        </div>
      </div>
    </div>
    <div className="data">
      <div className="data-history data-realtime">
        <img src={images.clock} alt="" className="data-image-lock" />
        <div className="data-history-content">
          <span className="data-history-content-title"> Realtime </span>
          <span className="data-history-content-text">
          - Websockets supported <br />
          - Multi-channels integration <br />
          - Secure channels <br />
          </span>
        </div>
      </div>
      <div className="data-transparency data-realtime">
        <img src={images.serverless} alt="" className="data-image-lock" />
        <div className="data-history-content">
          <span className="data-history-content-title"> Serverless </span>
          <span className="data-history-content-text">
          - Microservices implementation<br />
          - React to multiple events HTTP, DB, <br />
          Websockets <br />
          - Pay as you go<br />
          </span>
        </div>
      </div>
    </div>
    <div className="built-for-both">
      <span className="built-for-both-title">
      Built for both Traditional and Decentralized <br />
      Stacks
      </span>
      <div className="built-for-both-title-line" />
      <div className="built-for-both-content">
        Byte Network can be used to build on top of existent infrastructures or add it as an additional layer to connect to other blockchain resources. Either way we make sure that you have the right tools to add new services, easily and secure.
      </div>
      <div className="built-for-both-stack">
        <div className="built-for-both-traditional">
          <span className="built-for-both-traditional-title"> TRADITIONAL STACK </span>
          <span className="built-for-both-traditional-content"> Current infrastructures are in the most cases predictable and hackable, reason for an anual $200 buillion loss. </span>
        </div>
        <div className="built-for-both-traditional">
          <span className="built-for-both-traditional-title"> BLOCKCHAIN STACK </span>
          <span className="built-for-both-traditional-content"> Blockchain data offers some spectacular
          posibilities, still value is decreased if we centralize
          it to the end-user trough the traditional clouds. </span>
        </div>
      </div>
      <div className="built-for-both-backends">
        Decentralized backends (APIs - microservices)
      </div>
      <div className="built-for-both-backends">
        Decentralized Database, Big Data, File storage, CDN
      </div>
      <div className="built-for-both-backends">
        <img src={images.bytenetwork} alt="" className="bytenetwork-image" />
        <img src={images.swarm} alt="" className="image-swarm" />
        <img src={images.whisper} alt="" className="image-whisper" />
        <img src={images.bigchain} alt="" className="bigchain" />
      </div>
    </div>
    <div className="blockchain">
      <span className="blockchain-title"> Blockchain as a Word Class Cloud </span>
      <div className="built-for-both-title-line" />
      <div className="built-for-both-content">
        Byte Network combines multiple technologies to make sure that the ultimate cloud solution platform is delivered. Beside offering speed, reliability, scalability, imutability, the solution tends to improve the way on how developers are building backends, making the development lifecycle more eficient, providing companies support to focus more on the business.
      </div>
      <div className="blockchain-content">
        Byte Network ingests key benefits from cloud solutions and blockchain in order to improve adoption and developer experience.
      </div>
      <div className="blockchain-line" />
      <div className="blockchain-table">
        <span className="blockchain-table-header" />
        <span className="blockchain-table-header"> Blockchain Clouds </span>
        <span className="blockchain-table-header"> Traditional Clouds </span>
        <img src={images.logo} alt="" className="image-logo" />
      </div>
      <div className="blockchain-line" />
      <div className="blockchain-table-body">
        <span className="blockchain-menu"> Immutability </span>
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
      </div>
      <div className="blockchain-line" />
      <div className="blockchain-table-body">
        <span className="blockchain-menu"> Data History </span>
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
      </div>
      <div className="blockchain-line" />
      <div className="blockchain-table-body">
        <span className="blockchain-menu"> Rich Permissioning </span>
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
      </div>
      <div className="blockchain-line" />
      <div className="blockchain-table-body">
        <span className="blockchain-menu"> Fast Adoption </span>
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
      </div>
      <div className="blockchain-line" />
      <div className="blockchain-table-body">
        <span className="blockchain-menu"> Quick Collaboration </span>
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
      </div>
      <div className="blockchain-line" />
      <div className="blockchain-table-body">
        <span className="blockchain-menu"> Flexibility </span>
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
        <img src={images.check} alt="" className="image-check" />
      </div>
      <div className="blockchain-line" />
    </div>
    <div className="useCases">
      <span className="built-for-both-title"> Use Cases </span>
      <div className="built-for-both-title-line" />
      <div className="built-for-both-content">
        Byte Network is built to fullfill most of the expectations and demands when you’re looking for a complete cloud solution. In addition is great fit for a large variety of projects types … standard APIs,  secure storage, identity, government, property rights or anything backend related, Byte Network has it all.
      </div>
      <div className="useCases-block">
        <div className="useCases-block-title">
          <img src={images.airPlan} alt="" className="useCases-airPlat" />
          <span className="useCases-block-title-text">
            Ultra secure, scalable backends
          </span>
        </div>
        <div className="useCases-block-text">
          Build API endpoints, realtime systems, interfaces to storage and database like never before. Secured by mighty blockchain, our solution helps developers to spin up really quick with their existing project or startup. Byte Network improves the way on how developers are building backends, deploying infrastructures with one click.
        </div>
        <div className="useCases-block-line" />
        <div className="useCases-block-title">
          <img src={images.middleware} alt="" className="useCases-airPlat" />
          <span className="useCases-block-title-text">
            Blockchain middleware
          </span>
        </div>
        <div className="useCases-block-text">
          Blockchain data and assets are popular for their decentralized properties, still when we use traditional clouds to process it and send it to the end-user we centralized it, loosing most of the value that was previously inherited. Byte Network solution is capable to keep the data safe when send it to the user and all the way back by preserving the blockchain characteristics.
        </div>
        <div className="useCases-block-line" />
        <div className="useCases-block-title">
          <img src={images.card} alt="" className="useCases-airPlat" />
          <span className="useCases-block-title-text">
            Identity Management
          </span>
        </div>
        <div className="useCases-block-text">
          Authentification backend is one aspect which Byte Network can handle it very well by storing code chunks in diferent nodes making it really secure, still this is only one piece of an user management system, where personal data mangement remains a concern for most of the organizations. BigChainDB plays an important role here by enabling a new way to manage identity and personal data.
        </div>
        <div className="useCases-block-line" />
        <div className="useCases-block-title">
          <img src={images.chain} alt="" className="useCases-airPlat" />
          <span className="useCases-block-title-text">
            Supply chain
          </span>
        </div>
        <div className="useCases-block-text">
          From conducting payment and audits to tracking inventory and assets and any other tangible or intangible asset is highly vulnerable to unrecoverable scenarios. Byte Network provides a comprehensive toolset for transparent audit trailers and “undo” operations.
        </div>
        <div className="useCases-block-line" />
        <div className="useCases-block-title">
          <img src={images.government} alt="" className="useCases-airPlat" />
          <span className="useCases-block-title-text">
            Government
          </span>
        </div>
        <div className="useCases-block-text">
          Blockchain solutions can be implemented in various government departments, identify services, company formation, voting systems, properties and land registration. Byte Network if fully capable to create clomplete systems to provide transparency and support for citizens and officials daily operations.
        </div>
      </div>
    </div>
    <div className="read-whitePaper">
      <span className="white-title"> Whitepaper </span>
      <div className="white-line" />
      <span className="white-content"> Byte Network: A blockchain cloud solution. </span>
      <button className="white-button">
        <img src={images.readText} alt="" className="read-image" />
        <span className="read-text"> READ WHITEPAPER </span>
      </button>
    </div>
  </div>
)

export default Body
