export default interface APIRequestInit<Q, P, B> {

    /** Query parameters */
    query: Q,

    /** Path parameters */
    params: P,

    /** Body */
    body: B
}
