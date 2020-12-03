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