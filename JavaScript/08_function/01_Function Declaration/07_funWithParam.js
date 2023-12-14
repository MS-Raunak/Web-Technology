main();

function main()
{
    let  i = 1;
    let j = m1(i++) + m1(++i);
    console.log(i, j); // 3 4
}

function m1(a)
{
    return a++;
}