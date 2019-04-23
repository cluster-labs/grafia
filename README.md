# Grafia

An easy-to-use, modular & hackable interface for [IpfsCloud](https://ipfsclous.store)


## Lead Maintainer

[Vaibhav Saini](https://github.com/vasa-develop)


## Stack Used

* React (UI Library)
* Redux (Application State Management)

For more details on Stack, see [Architecture](#Architecture)


## Architecture
> *Disclaimer: The Architecture is subject to major changes*

Want to know more about the architecture? Join us in the discussion on [**IPFS Discussion Forum thread**](https://discuss.ipfs.io/t/community-discussion-ipfscloud-v2-0-draft/5420)

![IpfsCloud Architecture](https://i.pinimg.com/originals/dc/1d/3f/dc1d3fabcce25a16940b0b2a77d747c4.png)


## **[KeyBase](https://github.com/cluster-labs/dappbase/tree/master/identity)**

KeyBase uses **[DID](https://w3c-ccg.github.io/did-spec)**s as a base for its functioning.

The basic idea of KeyBase is to define a multi-DID management framework so that it can be used by an dapp to manage users which can have identities from different [**DIRs**](https://w3c-ccg.github.io/did-spec/#terminology)(Distributed Registries)

The supported **DID methods** need to define a set of functions(as mentioned in [W3C DID Spec draft](https://w3c-ccg.github.io/did-spec/)) in order to be compatible as a KeyBase implementation.

A brief overview of how it will work.



*   An app/service will have a **service endpoint.**
*   A user(owner of a DID) with a DID(registered on a DIR) visits website/app of a service.
*   [**SIGN UP**] The user Signs up on the service. This adds the service endpoint of the service to the **DID-document** of the user. It is recommended to follow **[DID-Auth spec](https://github.com/WebOfTrustInfo/rebooting-the-web-of-trust-spring2018/blob/master/draft-documents/did_auth_draft.md)** when signing up a user.
*   [**LOG IN**] When the user logins, the user needs to prove his ownership of the DID.
*   [**RECOVER**] When the user loses control of the DID(eg. loses the private key controlling the DID), then the DID method must provide a function to recover his/her DID.

There are also many optional, but good to have functions in a DID method



*   A user can associate **verifiable claims,** such as claims of owning a social network account(such as **[Keybase](https://keybase.io)**). These verifiable claims can be **self-signed** or can be issued by an external service(if an external service is involved, then the service endpoint to that claims service must be added to the DID-document). The more the claims linked to a DID, the more authentic it becomes.
*   **DID delegates** prove to be a really powerful tool when it comes to seamless and secure, cross-platform or cross-device experience.

**Design goals:**



*   Intuitive and Familiar experience for the end-users. The users should have minimal interaction with the private keys and cryptographic operations.
*   It should be clear and easy for developers to authenticate the users.

**Proposed implementation**


 It is easy to store and manage keys and other information when it to mobile users. But the real problem comes when interacting with the web user. So, in order to cover all the platforms, i.e. mobile, web and desktop we will have



*   SDK for mobiles
*   Modules for desktop
*   Browser extensions for the web

See [here](https://github.com/cluster-labs/dappbase/tree/master/identity) for more details on KeyBase.


## **[Grafia](https://github.com/cluster-labs/grafia)**

Grafia aims to be a modular interface which exposes a number of endpoints to interact with other services(for identity management, networking, etc.). It can also be used as a standalone application in some contexts.

**Uses-cases**

*   Can be used as a file browser for a Storage service based on IPFS.
*   Configurable IPFS gateways.
*   Modular Networking Layer. This allows other apps to built on top of this interface, potentially creating a Dapp market place.
*   Can be used as a stand-alone Libp2p peer. The interface can be used for streaming videos peer-to-peer, collaborating on documents, etc. using pub-sub.

Have an idea for creating an app on top of it? Start the discussion [**here**](https://github.com/cluster-labs/grafia/issues/new).

## **[Egress](https://github.com/cluster-labs/egress)**

Egress aims to become an infrastructure utility. It uses IPFS Cluster for orchestration of the pinset and managing the peers. 

The functions for managing peers and data are exposed by the IPFS Cluster, which can be utilized by a GUI like **[Horizon](https://github.com/cluster-labs/horizon)** for a better experience.

For IpfsCloud we also plan to use MFS in order to maintain a virtual file system. This solves the problem of “How to store the directory structure of the user’s data?”

See [here](https://github.com/cluster-labs/egress) for more details on Egress.