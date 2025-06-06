package com.example.lettering.util;


import com.example.lettering.domain.user.dto.PasswordEncryptionResult;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public class OpenCrypt {
    public static PasswordEncryptionResult encryptPw(String source) {

        SecureRandom sr = new SecureRandom();

        byte[] saltbyte = new byte[20];

        sr.nextBytes(saltbyte);

        StringBuffer sb = new StringBuffer();
        for (byte b : saltbyte) {
            sb.append(String.format("%02x", b));
        }

        String salt = sb.toString();

        byte[] hashedPw = getSHA256(source, salt);
        String hashedPassword = byteArrayToHex(hashedPw);

        return new PasswordEncryptionResult(hashedPassword, salt);
    }

    public static byte[] getSHA256(String source, String salt) {
        byte[] byteData = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(source.getBytes());
            md.update(salt.getBytes());
            byteData = md.digest();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return byteData;
    }

    public static String byteArrayToHex(byte[] ba) {
        if (ba == null || ba.length == 0) {
            return null;
        }

        StringBuffer sb = new StringBuffer(ba.length * 2);
        String hexNumber;
        for (int x = 0; x < ba.length; x++) {
            hexNumber = "0" + Integer.toHexString(0xff & ba[x]);

            sb.append(hexNumber.substring(hexNumber.length() - 2));
        }
        return sb.toString();
    }

}
