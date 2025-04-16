#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>
#include <semaphore.h>

#define BUFFER_SIZE 5
#define NUM_CLIENTS 10

int counter = 0;
int buffer[BUFFER_SIZE];
int in = 0, out = 0;

sem_t empty, full;
pthread_mutex_t mutex;

void* server(void* args) {
    while(1) {
        int request;
        sem_wait(&full);
        pthread_mutex_lock(&mutex);
        request = buffer[out];
        out = (out + 1) % BUFFER_SIZE;
        pthread_mutex_unlock(&mutex);
        sem_post(&empty);

        if(request == 1) {
            pthread_mutex_lock(&mutex);
            counter++;
            printf("Server: Incremented counter to %d\n", counter);
            pthread_mutex_unlock(&mutex);
        } else if(request == 2) {
            pthread_mutex_lock(&mutex);
            printf("Server: Counter value is %d\n", counter);
            pthread_mutex_unlock(&mutex);
        }
    }
}

void* client(void* args) {
    int* client_id = (int*)args;
    *client_id = (*client_id) + 1;
    int request_type = rand() % 2 + 1;
    sem_wait(&empty);
    pthread_mutex_lock(&mutex);
    buffer[in] = request_type;
    in = (in + 1) % BUFFER_SIZE;
    printf("Client %d sent request type %d\n", *client_id, request_type);
    pthread_mutex_unlock(&mutex);
    sem_post(&full);
    return NULL;
}

int main() {
    pthread_t server_thread, clients[NUM_CLIENTS];

    sem_init(&empty, 0, 5);
    sem_init(&full, 0, 0);
    pthread_mutex_init(&mutex, NULL);

    pthread_create(&server_thread, NULL, server, NULL);
    for(int i = 0; i < NUM_CLIENTS; i++) {
        pthread_create(&clients[i], NULL, client, &i);
    }
    for(int i = 0; i < NUM_CLIENTS; i++) {
        pthread_join(clients[i], NULL);
    }

    sem_destroy(&empty);
    sem_destroy(&full);
    pthread_mutex_destroy(&mutex);
    return 0;
}
