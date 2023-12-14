main();

function main()
{
    let  i = 1;
    let j = m1(i);
    console.log(i, j); // 1 1
}

function m1(a)
{
    return a++;
}