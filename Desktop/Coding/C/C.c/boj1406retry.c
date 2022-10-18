#include <stdio.h>
#include <stdlib.h>
typedef struct node{
    struct node *next;
    struct node *pre;
    char data;
}node;
int main(){
    node *head = (node *)malloc(sizeof(node));
    head->data = '!';
    head->next=head->pre=NULL;
    node *cur = head;
    char t;
    while((t=getchar())!='\n'){
        node *newnode = (node *)malloc(sizeof(node));
        newnode->data=t;
        newnode->next=NULL;
        newnode->pre=cur;
        cur->next=newnode;
        cur = newnode;
    }
    int a; scanf("%d",&a);
    for(int i=0;i<a;i++){
        char n; scanf(" %c",&n);
        switch (n)
        {
        case 'L':{
            if(cur->pre) cur = cur->pre;
            else{ cur->pre = NULL;}
            break;
            }
        case 'D':{
            if(cur->next) cur = cur->next;
            break;
        }
        case 'B':{
            if(cur->pre==NULL) continue;
            node *del = (node *)malloc(sizeof(node));
            del = cur;
            cur = del->pre;
            if(del->next){
            cur->next = del->next;
            del->next->pre = cur;
            del->pre = NULL;
            } else{ cur->next = NULL; }
            free(del);
            break;
        }
        case 'P':{
            char b; scanf(" %c",&b);
            node *newnode = (node *)malloc(sizeof(node));
            newnode->data = b;
            newnode->pre = cur;
            if(cur->next){
                newnode->next = cur->next;
                cur->next->pre = newnode;
            }
            else{
                newnode->next= NULL;
            }
            cur->next= newnode;
            cur = newnode;
            break;
        }
        }
    }
    head = head->next;
    while(head){
        printf("%c",head->data);
        head = head->next;
    }
}