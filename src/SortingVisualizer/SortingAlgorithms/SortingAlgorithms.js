export function getMergeSortAnimations(array)
{
    const animations=[];
    if(array.length<=1)
    {
        return array;
    }
    const temp=array.slice();
    mergesort(array,0,array.length,temp,animations);
    return animations;
}

function mergesort(array,start,end,temp,animations)
{
    if(end-start===1)
    {
        return;
    }
    const middle=Math.floor((start+end)/2);
    mergesort(temp,start,middle,array,animations);
    mergesort(temp,middle,end,array,animations);
    let x=start;
    let y=middle;
    let z=start;
    while(x<middle && y<end)
    {
        if(temp[x]<temp[y])
        {
            animations.push([z,temp[x]]);
            array[z++]=temp[x++];
        }
        else
        {
            animations.push([z,temp[y]]);
            array[z++]=temp[y++];
        }
    }
    while(x!=middle)
    {
        animations.push([z,temp[x]])
        array[z++]=temp[x++];
    }
    while(y!=end)
    {
        animations.push([z,temp[y]])
        array[z++]=temp[y++];
    }
}

export function getBubbleSortAnimations(array)
{
    const animations=[];
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array.length-i-1;j++)
        {
            if(array[j]>array[j+1])
            {
                const temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                animations.push([j,array[j]]);
                animations.push([j+1,array[j+1]]);
            }
        }
    }
    return animations;
}

export function getInsertionSortAniamtions(array)
{
    const animations=[];
    for(let i=1;i<array.length;i++)
    {
        for(let j=i;j>0;j--)
        {
            if(array[j]<array[j-1])
            {
                const temp=array[j];
                array[j]=array[j-1];
                array[j-1]=temp;
                animations.push([j,array[j]]);
                animations.push([j-1,array[j-1]]);
            }
            else
            {
                break;
            }
        }
    }
    return animations;
}

export function getSelectionSortAnimations(array)
{
    const animations=[];
    for(let i=0;i<array.length-1;i++)
    {
        var minind=i;
        for(let j=i+1;j<array.length;j++)
        {
            if(array[j]<array[minind])
            {
                minind=j;
            }
        }
        if(minind!==i)
        {
            const temp=array[i];
            array[i]=array[minind];
            array[minind]=temp;
            animations.push([i,array[i]]);
            animations.push([minind,array[minind]]);
        }
    }
    return animations;
}

export function getHeapSortAniamtions(array)
{
    const animations=[];
    var l=array.length;
    var lim=parseInt(l/2-1);
    for(let i=lim;i>=0;i--)
    {
        heapify(array,l,i,animations);
        //console.log(i);
    }
    heapsort(array,animations,l);
    return animations;
}

function heapsort(array,animations,l)
{
    for(let i=l-1;i>=0;i--)
    {
        var temp=array[i];
        array[i]=array[0];
        array[0]=temp;
        animations.push([i,array[i]]);
        animations.push([0,array[0]]);
        heapify(array,i,0,animations);
    }
}

function heapify(array,l,i,animations)
{
    //console.log(animations.length);
    var largest=i;
    var left=2*i+1;
    var right=2*i+2;

    if(left<l && array[left]>array[largest])
    {
        largest=left;
    }
    if(right<l && array[right]>array[largest])
    {
        largest=right;
    }

    if(largest!==i)
    {
        var temp=array[i];
        array[i]=array[largest];
        array[largest]=temp;
        animations.push([largest,array[largest]]);
        animations.push([i,array[i]]);
        heapify(array,l,largest,animations);
    }
}