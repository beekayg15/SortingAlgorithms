import React from 'react';
import './SortingVisualizer.css';
import * as SortingAlgorithms from './SortingAlgorithms/SortingAlgorithms.js';

var animation_speed=10;
var numberofelements=250;

export default class SortingVisualizer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={array:[],};
    }

    componentDidMount()
    {
        this.resetArray();
    }

    resetArray()
    {
        const array=[];
        for(let i=0;i<numberofelements;i++)
        {
            array.push(randomin(5,550));
        }
        this.setState({array});
    }

    MergeSort()
    {
        const animations=SortingAlgorithms.getMergeSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++)
        {
            const arraybars=document.getElementsByClassName('array-bar');
            setTimeout(()=>{
                const [ind,h]=animations[i];
                const st=arraybars[ind].style;
                st.height=`${h}px`;
            },i*animation_speed);
        }
    }

    BubbleSort()
    {
        const animations=SortingAlgorithms.getBubbleSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++)
        {
            const arraybars=document.getElementsByClassName('array-bar');
            setTimeout(()=>{
                const [ind,h]=animations[i];
                const st=arraybars[ind].style;
                st.height=`${h}px`; 
            },i*animation_speed);
        }
    }

    SelectionSort()
    {
        const animations=SortingAlgorithms.getSelectionSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++)
        {
            const arraybars=document.getElementsByClassName('array-bar');
            setTimeout(()=>{
                const [ind,h]=animations[i];
                const st=arraybars[ind].style;
                st.height=`${h}px`; 
            },i*animation_speed);
        }
    }

    InsertionSort()
    {
        const animations=SortingAlgorithms.getInsertionSortAniamtions(this.state.array);
        for(let i=0;i<animations.length;i++)
        {
            const arraybars=document.getElementsByClassName('array-bar');
            setTimeout(()=>{
                const [ind,h]=animations[i];
                const st=arraybars[ind].style;
                st.height=`${h}px`;
            },i*animation_speed);
        }
    }

    HeapSort()
    {
        const animations=SortingAlgorithms.getHeapSortAniamtions(this.state.array);
        for(let i=0;i<animations.length;i++)
        {
            const arraybars=document.getElementsByClassName('array-bar');
            setTimeout(()=>{
                const [ind,h]=animations[i];
                const st=arraybars[ind].style;
                st.height=`${h}px`;
            },i*animation_speed);
        }
    }

    QuickSort()
    {
        const animations=SortingAlgorithms.getQuickSortAniamtions(this.state.array);
        for(let i=0;i<animations.length;i++)
        {
            const arraybars=document.getElementsByClassName('array-bar');
            setTimeout(()=>{
                const [ind,h]=animations[i];
                const st=arraybars[ind].style;
                st.height=`${h}px`;
            },i*animation_speed);
        }
    }

    IncreaseSpeed()
    {
        animation_speed+=3;
    }

    DecreaseSpeed()
    {
        animation_speed-=3;
        if(animation_speed<=0)
        {
            animation_speed=1;
        }
    }

    IncreaseSize()
    {
        numberofelements+=25;
        if(numberofelements>275)
        {
            numberofelements=275;
        }
        this.resetArray();
    }

    DecreaseSize()
    {
        numberofelements-=25;
        if(numberofelements<25)
        {
            numberofelements=25;
        }
        this.resetArray();
    }

    render()
    {
        const {array}=this.state;
        return (
            <div className="array-container">
                <br></br>
                <button onClick={()=>this.IncreaseSize()}>Size +</button>
                <button onClick={()=>this.IncreaseSpeed()}>Speed -</button>
                <button onClick={()=>this.resetArray()}>New Array</button>
                <button onClick={()=>this.MergeSort()}>Merge Sort</button>
                <button onClick={()=>this.BubbleSort()}>Bubble Sort</button>
                <button onClick={()=>this.SelectionSort()}>Selection Sort</button>
                <button onClick={()=>this.InsertionSort()}>Insertion Sort</button>
                <button onClick={()=>this.HeapSort()}>Heap Sort</button>
                <button onClick={()=>this.QuickSort()}>Quick Sort</button>
                <button onClick={()=>this.DecreaseSpeed()}>Speed +</button>
                <button onClick={()=>this.DecreaseSize()}>Size -</button>
                <br></br>
                <br></br>
                <div id="bars">
                {array.map((value,idx)=>(
                <div 
                className="array-bar" 
                key={idx}
                style={{height: `${value}px`,width: `${(275/numberofelements)*2}px`}}></div>
                ))}</div>
                <br></br>
            </div>
        );
    }
}

function randomin(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}