import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

// Configure o cliente Supabase com suas credenciais
const supabase = createClient('https://izuwtwjojmuvomlduwsi.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dXd0d2pvam11dm9tbGR1d3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4OTI1NTEsImV4cCI6MjAxNDQ2ODU1MX0.HJSrxTZLKvBsgxxVTK2vDdEKdOw3_PNp61f9xI_-7pE');

export default function DatabaseStatus() {
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        // Verifique a conexão com o Supabase
        async function checkDatabaseConnection() {
            try {
                const { data, error } = await supabase.from('USUARIO').select();

                if (!error) {
                    setConnected(true);
                }
            } catch (error) {
                console.error('Erro ao verificar a conexão com o banco de dados:', error);
            }
        }

        checkDatabaseConnection();
    }, []);

    return (
        <>
            <div>
                <h1>Estado da Conexão com o Banco de Dados Supabase</h1>
                {connected ? (
                    <p>Conectado ao banco de dados Supabase</p>
                ) : (
                    <p>Não foi possível conectar ao banco de dados Supabase</p>
                )}
            </div>
            <div>
                <Link href="/">Voltar</Link>
            </div>
        </>
    );
}
