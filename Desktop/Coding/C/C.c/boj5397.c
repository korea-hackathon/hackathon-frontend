#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct node{
    struct node *next;
    struct node *pre;
    char data;
}node;
int main(){
    int a; scanf("%d",&a);
    for(int i=0;i<a;i++){
        char *arr = (char *)malloc(sizeof(char)*1000000);
        scanf("%s",arr);
        int flag = 0;
        node *head = (node *)malloc(sizeof(node));
        head->pre=head->next=NULL;
        node *cur = head;
        for(int i=0;arr[i];i++){
            if(arr[i]=='<'){
                if(cur->pre) cur = cur->pre;
            }
            else if(arr[i]=='>'){
                if(cur->next) cur = cur->next;
            }
            else if(arr[i]=='-'){
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
            }
            else{
                node *newnode = (node *)malloc(sizeof(node));
                newnode->data = arr[i];
                newnode->pre = cur;
                if(cur->next){
                    newnode->next = cur->next;
                    cur->next->pre = newnode;
                } 
                else{
                    newnode->next = NULL;
                }
                cur->next = newnode;
                cur = newnode;
            }
            
            
        }
        head = head->next;
        while(head->data!=NULL){
            printf("%c",head->data);
            head = head->next;
        }
        printf("\n");
    }
}