

// Print 1 to 5 n times
function print1to5Ntimes(n)
{
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          str = str +  j + ' ';
        }
        str = str + "\n";
    }
    //console.log(str)
    window.alert(str)
}

// Print 5 to 1 n times

function reversePattern(n)
{
    let str = ' ';
    for(let i=1; i<=n; i++)
    {
        for(let j = 5; j>=1; j--)
        {
            str = str + j + ' ';
        }
        str = str + '\n'
    }
    window.alert(str)
}

// snake pattern
function snakePattern(n)
{
    let num = 1;
    let str = ' ';
    for(let i=1; i<=n; i++)
    {
        if(i%2!=0)
        {
            for(let j=1 ; j<=n; j++)
            {
                str = str + num + ' ';
                num++;
            }
            str = str + '\n'
        }

        else
        {
            num = (num +n)-1;
            for(let j=1; j<=n; j++)
            {
                str = str + num + " "
                num--;
            }
            str = str + '\n'
            num = (num + n) + 1;
        }

    }
    window.alert(str);
}

// print1to5Ntimes(5);
// reversePattern(5);
snakePattern(5);

