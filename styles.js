import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F3F6F1',
    },

    header: {
        backgroundColor: '#3C712A',
        paddingHorizontal: 24,
        paddingTop: 25,
        paddingBottom: 32,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    ola: {
        color: '#CDE6C5',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 2,
        marginBottom: 5,
    },

    titulo: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '800',
    },

    subtitulo: {
        color: '#E5F1E2',
        fontSize: 14,
        marginTop: 7,
    },

    iconeHeader: {
        width: 58,
        height: 58,
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconeTexto: {
        fontSize: 28,
    },

    conteudo: {
        flex: 1,
        paddingHorizontal: 20,
    },

    cardAdicionar: {
        backgroundColor: '#FFFFFF',
        marginTop: -12,
        borderRadius: 20,
        padding: 18,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
    },

    label: {
        color: '#181818',
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 12,
    },

    linhaInput: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    inputContainer: {
        flex: 1,
        height: 52,
        backgroundColor: '#F5F7F4',
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: '#E2E8DF',
    },

    iconeInput: {
        fontSize: 19,
        marginRight: 8,
    },

    input: {
        flex: 1,
        fontSize: 15,
        color: '#181818',
    },

    botao: {
        width: 52,
        height: 52,
        borderRadius: 14,
        backgroundColor: '#3C712A',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },

    botaoTexto: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: '300',
    },

    cabecalhoLista: {
        marginTop: 25,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    tituloLista: {
        fontSize: 21,
        fontWeight: '800',
        color: '#181818',
    },

    descricaoLista: {
        color: '#777',
        fontSize: 12,
        marginTop: 3,
    },

    contador: {
        backgroundColor: '#E2F0DE',
        paddingHorizontal: 13,
        paddingVertical: 7,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },

    contadorNumero: {
        color: '#3C712A',
        fontSize: 16,
        fontWeight: '800',
    },

    contadorTexto: {
        color: '#3C712A',
        fontSize: 12,
        fontWeight: '600',
    },

    lista: {
        paddingBottom: 30,
    },

    itemCard: {
        backgroundColor: '#FFFFFF',
        minHeight: 70,
        borderRadius: 17,
        marginBottom: 11,
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },

    numeroItem: {
        width: 42,
        height: 42,
        borderRadius: 13,
        backgroundColor: '#E7F2E4',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 13,
    },

    numeroTexto: {
        color: '#3C712A',
        fontSize: 16,
        fontWeight: '800',
    },

    informacaoItem: {
        flex: 1,
    },

    itemTexto: {
        color: '#181818',
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'capitalize',
    },

    itemDescricao: {
        color: '#999',
        fontSize: 11,
        marginTop: 3,
    },

    check: {
        width: 31,
        height: 31,
        borderRadius: 10,
        backgroundColor: '#3C712A',
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkTexto: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
    },

    listaVazia: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 80,
    },

    emptyContainer: {
        alignItems: 'center',
        paddingHorizontal: 30,
    },

    emptyIcon: {
        width: 90,
        height: 90,
        borderRadius: 30,
        backgroundColor: '#E7F2E4',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18,
    },

    emptyEmoji: {
        fontSize: 42,
    },

    emptyTitulo: {
        color: '#181818',
        fontSize: 19,
        fontWeight: '800',
        marginBottom: 7,
    },

    emptyTexto: {
        color: '#888',
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 20,
    },

});

export default styles;