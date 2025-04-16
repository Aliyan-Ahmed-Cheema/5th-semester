#include <stdio.h>
#include <signal.h>
#include <unistd.h>

char buffer[] = "You can not terminate this process";
void signal_handler (int signo){
//write(STDOUT_FILENO,buffer,sizeof(buffer));
//printf("You Can Not Terminate this Process %d\n",getpid());
switch(signo){
case SIGINT:
printf("Caught SIGINT(keyboard interrupt).\n");
break;
case SIGPIPE:
printf("Caught SIGPIPE(pipe overflow).\n");
break;
case SIGQUIT:
printf("Caught SIGQUIT(Quit from keyboard).\n");
break;
case SIGALRM:
printf("Caught SIGALRM(Alarm clock process temination),\n");
break;
default:
printf("Caught unexpected Signal: %d\n",signo);
break;
}
}

int main() {
printf("My process id is %d\n",getpid());
struct sigaction act;
act.sa_handler = signal_handler;
act.sa_flags = 0;
sigaction(SIGINT, &act, NULL);
sigaction (SIGPIPE, &act, NULL);
sigaction (SIGQUIT, &act, NULL);

sigset_t block_set;
//sigfillset(&block_set); //this blocks all the signals except SIGKILL
//this block is for task 2
sigemptyset(&block_set);//intialization
sigaddset(&block_set,SIGPIPE);
sigaddset(&block_set,SIGALRM);
sigprocmask(SIG_BLOCK, &block_set, NULL);
printf("SIGPIPE and SIGALRM are now blocked\n");

printf("See the magic\n");
while(1){}
sigprocmask(SIG_UNBLOCK, &block_set, NULL); //this if for task 2 as well
return 0;
}