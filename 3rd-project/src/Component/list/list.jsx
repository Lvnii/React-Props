import './style.css'
import Button from '../button/button';
import Card from '../card/card';
import { useState } from 'react';



const List = () => {
    const [data, setData] = useState([
    
        {   
            id: 1,
            title: 'balloons',
            description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nulla officiis. Accusantium maiores provident molestiae culpa adipisci harum excepturi autem molestias voluptates facere ut facilis, quidem velit id fugiat fugit.",
            img:"https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A="
        },

        {   
            id: 2,
            title: 'balloons',
            description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nulla officiis. Accusantium maiores provident molestiae culpa adipisci harum excepturi autem molestias voluptates facere ut facilis, quidem velit id fugiat fugit.",
            img:"https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A="
        },

        {   
            id: 3,
            title: 'balloons',
            description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nulla officiis. Accusantium maiores provident molestiae culpa adipisci harum excepturi autem molestias voluptates facere ut facilis, quidem velit id fugiat fugit.",
            img:"https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A="
        },

        {   
            id: 4,
            title: 'balloons',
            description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nulla officiis. Accusantium maiores provident molestiae culpa adipisci harum excepturi autem molestias voluptates facere ut facilis, quidem velit id fugiat fugit.",
            img:"https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A="
        },

        {   
            id: 5,
            title: 'balloons',
            description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nulla officiis. Accusantium maiores provident molestiae culpa adipisci harum excepturi autem molestias voluptates facere ut facilis, quidem velit id fugiat fugit.",
            img:"https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A="
        },

        {   
            id: 6,
            title: 'balloons',
            description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nulla officiis. Accusantium maiores provident molestiae culpa adipisci harum excepturi autem molestias voluptates facere ut facilis, quidem velit id fugiat fugit.",
            img:"https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A="
        },

        {   
            id: 7,
            title: 'balloons',
            description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nulla officiis. Accusantium maiores provident molestiae culpa adipisci harum excepturi autem molestias voluptates facere ut facilis, quidem velit id fugiat fugit.",
            img:"https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A="
        },

        {   
            id: 8,
            title: 'balloons',
            description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nulla officiis. Accusantium maiores provident molestiae culpa adipisci harum excepturi autem molestias voluptates facere ut facilis, quidem velit id fugiat fugit.",
            img:"https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A="
        },

        {   
            id: 9,
            title: 'balloons',
            description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nulla officiis. Accusantium maiores provident molestiae culpa adipisci harum excepturi autem molestias voluptates facere ut facilis, quidem velit id fugiat fugit.",
            img:"https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A="
        },

        {   
            id: 10,
            title: 'balloons',
            description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nulla officiis. Accusantium maiores provident molestiae culpa adipisci harum excepturi autem molestias voluptates facere ut facilis, quidem velit id fugiat fugit.",
            img:"https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A="
        },
    ]);

    const deleteItem = (id) => {
        const newData = data.filter((item) => item.id !== id)
        setData(newData)
    }

    return (
        <div className="list">
            <ul>
                {data.map((item) => {
                        return (
                            <li key={item.id}>
                                <Card
                                    id={item.id}
                                    title={`${item.title}_${item.id}`}
                                    description={item.description}
                                    img={item.img}
                                    remove={() => {deleteItem(item.id)}}
                                />
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default List;