import { auth } from "@/lib/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

interface IAuthUserInitialState {
  user: any;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: IAuthUserInitialState = {
  user: {},
  isLoading: true,
  isError: false,
  error: null,
};

interface ICreateUserWithEmail {
  email: string;
  password: string;
}

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }: ICreateUserWithEmail) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data?.user;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: ICreateUserWithEmail) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data?.user;
  }
);

// Google Sign In
const provider = new GoogleAuthProvider();

export const googleSignIn = createAsyncThunk("auth/googleSignIn", async () => {
  const data = await signInWithPopup(auth, provider);

  return { name: data?.user?.displayName, email: data?.user?.email };
});

export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (profile: any) => {
    const data = await updateProfile(auth.currentUser!, profile);
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      })
      .addCase(googleSignIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

export const { setUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
