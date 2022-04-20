import db from "../firebase";
import { BulkStylists, NewUserBody, StylistProfile, UploadStyleSeekerProfile, UploadStylistProfile } from "../types/ProfileTypes";
import { ProfileManager } from "./ProfileManager";
import "firebase/auth"

export interface UserRole {
    role: string | null;
}

export const ProfileService = {

    getUID: () => {
        return new Promise((resolve) => {
            return db.auth().onAuthStateChanged((user) => {
                if (user) {
                    resolve(user.uid)
                }
            })
        }).then((uid) => uid)
    },

    getUserName: async(): Promise<any | null> => {
        return await new Promise(async(resolve) => {
            return await db.auth().onAuthStateChanged(async(user) => {
                if (user) {
                    resolve(user.displayName)
                }
            })
        }).then((name) => name)
    },

    getUserToken: async(): Promise<string | null> => {
        return await new Promise(async(resolve, reject) => {
            await db.auth().onAuthStateChanged(async(user) => {
                if (user) {
                    console.log((await user.getIdTokenResult(true)).token)
                    resolve((await user.getIdTokenResult(true)).token);
                } else {
                    resolve(null)
                }
            })
        })
    },

    getUserRole: async(): Promise<UserRole>  => {
        try {
            const getUser = new Promise(async(resolve, reject) =>  {
                await ProfileManager.getUserRole().then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(user.data.role);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

            return {
                "role" : await getUser as string
            }
        } catch (err) {
            return {
                "role" : null
            };
        }
    },

    getBulkStylists: async(): Promise<BulkStylists>  => {
        try {
            const getBulkLists = new Promise(async(resolve, reject) =>  {
                await ProfileManager.getBulkStylists().then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(user.data.stylists);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

            return {
                "stylists" : await getBulkLists as Array<StylistProfile>
            }
        } catch (err) {
            return {
                "stylists" : null
            };
        }
    },

    createStyleSeekerProfile: async(style_seeker_info: UploadStyleSeekerProfile) => {
        try {
            const getStyleSeekerProfile = new Promise(async(resolve) =>  {
                await ProfileManager.addStyleSeekerProfile(style_seeker_info).then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(user.data.profile);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

            return {
                "profile" : await getStyleSeekerProfile as object
            }
        } catch (err) {
            return {
                "profile" : null
            };
        }
    },

    createStylistProfile: async(stylistInfo : UploadStylistProfile) => {
        try {
            const getStylistProfile = new Promise(async(resolve) =>  {
                await ProfileManager.addStylistProfile(stylistInfo).then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(user.data.profile);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

            return {
                "profile" : await getStylistProfile as object
            }
        } catch (err) {
            return {
                "profile" : null
            };
        }
    },

    isNewUser: async() => {
        try {
            return await new Promise(async(resolve, reject) => {
                await ProfileManager.isNewUser().then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(user.data);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

        } catch (err) {
            return null;
        }
    },
   
    loginFlow: async(email: string, password: string) => {
        try {
            await db.auth().signInWithEmailAndPassword(email, password).then((event: any) => {
                if (event) {
                    console.log(event)
                    // window.location.href = '/'
                }
            })
        } catch (err) {
            return alert(err)
        }
    },

    createAccount: async(userBody: NewUserBody) => {
        try {

            return await new Promise(async(resolve, reject) => {
                await ProfileManager.createAccount(userBody).then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(true);
                    } else {
                        resolve(false)
                    }
                })
            }).then((user) => user)

        } catch (err) {
            return null;
        }
    }

}