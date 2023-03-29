import { useContext } from 'react';
import { Global } from './GlobalContex';

const IMG = 'http://localhost:3004/';

function List() {

    const { trees, setDeleteTree, setEditModalTree } = useContext(Global);

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>Big Forest</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        trees?.map(t => (<li key={t.id} className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <h3>{t.title}</h3>
                                    </div>
                                    <div className="col-2">
                                        <div>{t.height} m</div>
                                    </div>
                                    <div className="col-2">
                                        <i>{t.type}</i>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-primary" onClick={() => setEditModalTree(t)} >rePLANT</button>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-primary" onClick={() => setDeleteTree(t)}>CUT</button>
                                    </div>
                                    <div className="col-4">
                                        {
                                            t.image
                                                ? <img className="list-image" alt="" src={IMG + t.image} />
                                                : <img className="list-image" alt="" src={IMG + '7dbeca7c-185c-4778-ab9e-d28e6fb0fecf.png'} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    );
}
export default List;