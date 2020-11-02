
import { PermissionsAndroid } from "react-native";

export const checkPermissions = async () => {
    const granted = await checkStoragePermissions();
    return granted === PermissionsAndroid.RESULTS.GRANTED;
}

const checkStoragePermissions = async () => {
    const hasReadStoragePermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
    const hasWriteStoragePermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

    if (!hasReadStoragePermission && !hasWriteStoragePermission) {
        return PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        ]);
    } else if (!hasReadStoragePermission) {
        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
    } else if (!hasWriteStoragePermission) {
        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    } else {
        return new Promise.resolve(PermissionsAndroid.RESULTS.GRANTED);
    }
};
