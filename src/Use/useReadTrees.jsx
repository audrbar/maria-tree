import { useState, useEffect } from "react";
import axios from "axios";
const URL = "http://localhost:3004/trees";

export const useReadTrees = (_) => {
    const [list, setList] = useState(null);
    const [update, setUpdate] = useState(Date.now());

    useEffect(() => {
        if (null === update) {
            return;
        }
        axios.get(URL, { withCredentials: true })
            .then((res) => setList(res.data));
    }, [update]);

    return [list, setUpdate];
};