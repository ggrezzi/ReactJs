import { Link } from "react-router-dom"


const Item = ({id, nombre, precio, categoria, descripcion, foto})=>{
    return (
        <div className="contenedor">
            <div class='column is-one-quarter'>
                <div class="card equal-height">
                    <div class="card-image has-text-centered">
                        <figure class="image is-64x64 is-inline-block">
                            <img src="./img/{foto}" alt={nombre} />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{nombre}</p>
                                <p class="subtitle is-6">Categoria: {categoria}</p>
                                <p class="subtitle is-6">Descripcion: {descripcion}</p>
                                <p class="subtitle is-6">Precio: ${precio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Item