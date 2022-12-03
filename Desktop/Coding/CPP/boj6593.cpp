#include <bits/stdc++.h>
using namespace std;
char board[30][30][30];
int check[30][30][30];
int dx[6]={0,1,0,-1,0,0};
int dy[6]={1,0,-1,0,0,0};
int dz[6]={0,0,0,0,1,-1};
queue<tuple<int,int,int>> Q;
int main(){
    while(1){
        int flag=0;
        memset(check,-1,sizeof(check));
        Q = queue<tuple<int,int,int>>();
        string arr[31];
        int l,r,c; cin>>l>>r>>c;
        if(l==0 && r==0 && c==0) break;
        for(int i=0;i<l;i++){
            for(int j=0;j<r;j++){
                string a; cin >> a;
                for(int k=0;k<c;k++){
                    board[i][j][k] = a[k];
                    if(board[i][j][k]=='S'){
                        Q.push({i,j,k});
                        check[i][j][k]=0;
                    }
                }
            }
        }
        while(!Q.empty()){
            int x = get<1>(Q.front());
            int y = get<2>(Q.front());
            int z = get<0>(Q.front());
            Q.pop();
            if(board[z][x][y]=='E'){
                cout << "Escaped in " <<check[z][x][y] << " minute(s).\n";
                flag=1;
            }
            for(int p=0;p<6;p++){
                int nx = x + dx[p];
                int ny = y + dy[p];
                int nz = z + dz[p];
                if(nx>=0 && nx<r && ny>=0 && ny<c && nz>=0 && nz<l){
                    if(board[nz][nx][ny]!='#' && check[nz][nx][ny]==-1){
                        cout << nz << " " << nx << " " << ny << "\n";
                        Q.push({nz,nx,ny});
                        check[nz][nx][ny]=check[z][x][y]+1;
                    }
                }
            }
        }
        if(!flag)
            cout << "Trapped!\n";
    }
}