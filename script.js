function swap(arr,i,j)
{
	let temp;
	temp=arr[i];
	arr[i]=arr[j];
	arr[j]=temp;
}

function heapify(arr,n,i)
{
	let smallest=i;
	let left=(2*i)+1;
	let right=(2*i)+2;
	if(left<n && arr[smallest]>arr[left])
	{
		smallest=left;
	}
	if(right <n && arr[smallest]>arr[right])
	{
		smallest=right;
	}
	if(i!=smallest)
	{
		swap(arr,smallest,i);
		heapify(arr,n,smallest);
	}
}
function insert(arr,x)
{
	arr.push(x);
	let i=arr.length-1;
	let parent=Math.floor((i-1)/2);
	while(parent>=0 && arr[parent]>arr[i])
		{
			swap(arr,parent,i);
			 i=parent;
		      parent=Math.floor((i-1)/2);
		}
}

function pop(arr)
{
    if(arr.length==0)
    {
        console.log("empty");
        return 
    }
	let n=arr.length;
	let x=arr[0];
	arr[0]=arr[n-1];
	arr.pop();
	n=arr.length;
	heapify(arr,n,0);
    return x;
}

function mincost(arr)
{ 
//write your code here
// return the min cost
let n=arr.length;
let cost=0;
for(let i=Math.floor(n/2)-1;i>=0;i--)
{
    heapify(arr,n,i);
    
}
while(arr.length>1){
        let a=pop(arr);
        let b=pop(arr);
        let rope=a+b;
        cost=cost+rope;
        insert(arr,rope);
		// console.log("a->",a," b->",b," rope->",rope," cost->",cost);
    }
// console.log(cost)
	return cost
}

module.exports=mincost;