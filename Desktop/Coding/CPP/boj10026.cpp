#include <bits/stdc++.h>
using namespace std;
int boardA[101][101];
int boardB[101][101];
int checkA[101][101];
int checkB[101][101];
int dx[4]={0,1,-1,0};
int dy[4]={1,0,0,-1};
queue<pair<int,int>> Qa;
queue<pair<int,int>> Qb;
int main(){
    int n; cin >> n;
    for(int i=0;i<n;i++){ // R : 0 G : 1 B : 2
        string a; cin >> a;
        for(int j=0;j<n;j++){
            if(a[j]=='R'){
                boardA[i][j]=0;
                boardB[i][j]=0;
            }
            if(a[j]=='G'){
                boardA[i][j]=1;
                boardB[i][j]=0;
            }
            if(a[j]=='B'){
                boardA[i][j]=2;
                boardB[i][j]=2;
            }
        }
    }
    int flag;
    int ansa=0;
    int ansb=0;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(!checkA[i][j]){
                ansa++;
                if(boardA[i][j]==0) flag=0;
                else if(boardA[i][j]==1) flag=1;
                else if(boardA[i][j]==2) flag=2;
                Qa.push({i,j});
                checkA[i][j]=1;
                while(!Qa.empty()){
                    int x= Qa.front().first;
                    int y= Qa.front().second; Qa.pop();
                    for(int dir=0;dir<4;dir++){
                        int nx = x + dx[dir];
                        int ny = y + dy[dir];
                        if(nx>=0 && nx<n && ny>=0 && ny<n){
                            if(boardA[nx][ny]==flag && !checkA[nx][ny]){
                                checkA[nx][ny]=1;
                                Qa.push({nx,ny});
                            }
                        }
                    }
                }
            }
        }
    }
    cout << ansa << " ";
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(!checkB[i][j]){
                ansb++;
                if(boardB[i][j]==0) flag=0;
                else if(boardA[i][j]==2) flag=2;
                Qb.push({i,j});
                checkB[i][j]=1;
                while(!Qb.empty()){
                    int x= Qb.front().first;
                    int y= Qb.front().second; Qb.pop();
                    for(int dir=0;dir<4;dir++){
                        int nx = x + dx[dir];
                        int ny = y + dy[dir];
                        if(nx>=0 && nx<n && ny>=0 && ny<n){
                            if(boardB[nx][ny]==flag && !checkB[nx][ny]){
                                checkB[nx][ny]=1;
                                Qb.push({nx,ny});
                            }
                        }
                    }
                }
            }
        }
    }
    cout << ansb;

}