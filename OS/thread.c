//Task 5
#include <stdio.h>
#include <stdlib.h>
#include <semaphore.h>
#include <pthread.h>
#include <unistd.h>

#define BUFFER_SIZE 5
int buffer[BUFFER_SIZE];
int counter = 0;
int in = 0;
int out = 0;

pthread_mutex_t mutex;
sem_t full,empty;

void *producer(void *param) {
int item;

while(1){
//sleep for random amount of time
int wait = rand() % 3 +1;
sleep(wait);

item = rand() % 10;
sem_wait(&empty);
pthread_mutex_lock(&mutex);

buffer[in] = item;
in = (in + 1) % BUFFER_SIZE;
counter++;
printf ("item produced: %d\n",item);

pthread_mutex_unlock(&mutex);
sem_post(&full);
}
}

void *consumer(void *param) {
int item;

while(1){
int wait = rand() % 3 +1;
sleep(wait);

sem_wait(&full);
pthread_mutex_lock(&mutex);

item = buffer[out];
out = (out + 1) % BUFFER_SIZE;
counter--;
printf("item consumed: %d\n",item);

pthread_mutex_unlock(&mutex);
sem_post(&empty);
}
}

int main(){
pthread_t producerThread, consumerThread;

pthread_mutex_init(&mutex, NULL);
sem_init (&full, 0 ,0);
sem_init (&empty, 0 ,BUFFER_SIZE);


pthread_create(&producerThread, NULL, producer, NULL);
pthread_create(&consumerThread, NULL, consumer, NULL);

pthread_join(producerThread, NULL);
pthread_join(consumerThread, NULL);

pthread_mutex_destroy(&mutex);
sem_destroy(&full);
sem_destroy(&empty);

return 0;
}