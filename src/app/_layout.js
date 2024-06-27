import {Stack, Link} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Pesquisar from './pesquisa';

export default function Layout(){
    return(
        <Stack
            screenOptions={{
                headerStyle:{
                    backgroundColor: "#000014",
                },
                headerTintColor: "white",
                headerRight: () => (
                    <Link href={'pesquisa'}>
                      <Ionicons name="search" size={24} color="white" style={{ marginRight: 15 }} />
                    </Link>
                  ),
            }}
        >
            <Stack.Screen name="Filme/[id]" options={{title: ""}} />
            <Stack.Screen name="index" options={{title: "CimolVideo"}} />
            <Stack.Screen name="pesquisa" options={{title: "Procurar Filmes"}} />
        </Stack>
    )
}