#include <stdio.h>
#include <math.h>
int main()
{
   int x,y,r,i,j,a[2000][2],cnt=0,t,z,present;
   float fy;
   scanf("%d",&r);
   for(x=-r;-r<=x&&x<=r;x++)
   {
       fy=sqrt((r*r)-(x*x));
       y=fy+0.4;
       a[cnt][0]=x;
       a[cnt][1]=y;
       cnt++;
       if(y!=0)
       {
           a[cnt][0]=x;
           a[cnt][1]=-y;
           cnt++;
       }
   }
   for(i=0;i<cnt;i++)
   {
      printf("[%d , %d]",a[i][0],a[i][1]);
   }
   for(i=0;i<cnt;i++)
   {
       for(j=i+1;j<cnt;j++)
       {
           if( (a[i][1]<a[j][1]) || (a[i][1]==a[j][1] && a[i][0]>a[j][0]) )
           {
               t=a[i][1];
               a[i][1]=a[j][1];
               a[j][1]=t;
               t=a[i][0];
               a[i][0]=a[j][0];
               a[j][0]=t;
               
           }
           
           
       }
   }
   printf("array after sorting\n");
   for(i=0;i<cnt;i++)
   {
      printf("[%d , %d]",a[i][0],a[i][1]);
   } 
   printf("\n");
   for(y=r;y>=-r;y--)
   {
       for(x=-r;x<=r;x++)
       {
           
           present=0;
           for(z=0;z<cnt;z++)
           {
               if(a[z][0]==x&&a[z][1]==y)
               {
                   present=1;
                   break;
               }
           }
           if(present==1)
           {
               printf("*");
           }
           else
           {
               printf(" ");
           }
       }
       printf("\n");
   }
        
   
}