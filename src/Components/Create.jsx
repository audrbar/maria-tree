import { useContext } from 'react';
import { useState } from 'react';
import { useFile } from '../Use/useFile';
import { Global } from './GlobalContex';

function Create() {

    const [title, setTitle] = useState('');
    const [height, setHeight] = useState(0);
    const [type, setType] = useState(1);
    const [file, readFile, remImage] = useFile();

    const { setCreateTree, types } = useContext(Global);

    const add = _ => {
        setCreateTree({
            title,
            height: parseInt(height) / 100,
            type: parseInt(type),
            file
        });
        setTitle('');
        setHeight(0);
        setType(1);
        remImage();
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>Please plant new tree</h2>
            </div>
            <div className="card-body">

                <div className="mb-3">
                    <label className="form-label">Tree</label>
                    <input type="text" className="form-control"
                        value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Slide to height: {height / 100} m</label>
                    <input type="range" min="0" max="9999" className="form-range"
                        value={height} onChange={e => setHeight(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tree type</label>
                    <select className="form-select" value={type} onChange={e => setType(e.target.value)}>
                        {
                            types.map(t => <option key={t.type} value={t.type}>{t.typeTitle}</option>)
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFileSm" className="form-label">Tree image</label>
                    <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={readFile} />
                </div>
                <div>
                    {
                        file
                            ? <img className='mb-3 upload-image' src={file} alt="" />
                            : null
                    }
                </div>
                <button className="btn btn-danger m-1" onClick={remImage}>CLEAN</button>
                <button className="btn btn-primary m-1" onClick={add}>PLANT</button>
            </div>
        </div>
    )
}

export default Create;